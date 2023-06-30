<template>
    <teleport to=''>
        <!-- 传送的标签 -->
    </teleport>

    <Suspense>
        <template #default>
            <!-- 真正要加载的组件 -->
        </template>
        <template #fallback>
            <!-- 后备组件 -->
        </template>
    </Suspense>
</template>
<script>
export default {};
</script>
