<script setup lang="ts">
const { data, status, refresh } = useFetch<any>("http://localhost:8000/posts");

const columns = [
  {
    header: "id",
    accessorKey: "id",
  },
  {
    header: "title",
    accessorKey: "title",
  },
  {
    header: "Body",
    accessorKey: "body",
  },
];

const pagination = ref({
  pageSize: 5,
  pageIndex: 0,
});

const table = useTemplateRef("table");
</script>

<template>
  <div class="space-y-6 mt-10">
    <div class="flex">
      <div class="ml-auto gap-2 flex">
        <NButton
          icon
          square
          label="i-radix-icons-reload"
          :una="{
            btnLoadingIcon: 'i-svg-spinners-clock animate-none',
          }"
          btn="solid-white"
          :loading="status === 'pending'"
          @click="refresh()"
        />
        <NButton square icon label="i-radix-icons-plus" />
      </div>
    </div>

    <NTable
      ref="table"
      :loading="status === 'pending'"
      :columns
      :data="data.posts"
      enable-sorting
      enable-column-filters
    />

    <!-- pagination -->
    <div
      class="mt-5 flex flex-wrap items-center justify-between gap-4 overflow-auto px-2"
    >
      <div class="flex items-center justify-center text-sm font-medium">
        Page {{ (table?.getState().pagination.pageIndex ?? 0) + 1 }} of
        {{ table?.getPageCount().toLocaleString() }}
      </div>

      <NPagination
        :page="(table?.getState().pagination.pageIndex ?? 0) + 1"
        :total="table?.getFilteredRowModel().rows.length"
        show-edges
        :items-per-page="table?.getState().pagination.pageSize"
        @update:page="table?.setPageIndex($event - 1)"
      />
    </div>
  </div>
</template>