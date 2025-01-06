<script setup lang="ts">
 
const { data, status, refresh } = useFetch<any>('http://localhost/posts')
 
const columns = [
  {
    header: 'id',
    accessorKey: 'id',
  },
  {
    header: 'title',
    accessorKey: 'title',
  },
  {
    header: 'Body',
    accessorKey: 'body',
  },
]
 
 
const pagination = ref({
  pageSize: 5,
  pageIndex: 0,
})
 
const table = useTemplateRef('table')
</script>
 
<template>
   <div class="mt-10 mb-4 space-y-6">
    <div class="flex gap-2 ml-auto">
      <NButton btn="solid-white" :loading="status === 'pending'"
        @click="refresh"
      >
        Refresh
      </NButton>
      <NButton>
        Ass Post
      </NButton>
    </div>
   </div>
<NTable
    ref="table"
    :columns
    :data="data.posts"
    enable-sorting
    enable-column-filters
  />
 
    <!-- pagination -->
<div
      class="flex flex-wrap items-center justify-between gap-4 px-2 mt-5 overflow-auto"
>
<div
        class="flex items-center justify-center text-sm font-medium"
>
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
</template>