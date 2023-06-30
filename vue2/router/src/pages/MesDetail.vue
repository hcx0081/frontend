<template>
    <ul>
        <!-- 简化之前 -->
        <!-- <li>Mes编号：{{ $route.params.id }}</li> -->
        <!-- <li>Mes标题：{{ $route.params.title }}</li> -->

        <!-- 简化之后 -->
        <li>Mes编号：{{ id }}</li>
        <li>Mes标题：{{ title }}</li>
    </ul>
</template>

<script>
export default {
    props: ['id', 'title'],
};
</script>
