<template>
  <NDialog title="Posts" description="Post Information">
    <template #trigger>
      <slot />
    </template>

    <div class="grid gap-4 py-4">
      <div class="grid gap-2">
        <div class="grid grid-cols-3 items-center gap-4">
          <NLabel for="title"> Title </NLabel>
          <NInput
            id="title"
            :una="{
              inputWrapper: 'col-span-2',
            }"
          />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <NLabel for="email"> Body </NLabel>
          <NInput
            type="textarea"
            :una="{
              inputWrapper: 'col-span-2',
            }"
          />
        </div>
      </div>
    </div>

    <template #footer>
      <NButton btn="solid" label="Save Changes" />
    </template>
  </NDialog>
</template>