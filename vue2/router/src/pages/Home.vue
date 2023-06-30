<template>
    <div>
        <h2>Home路由内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <!-- 路由链接 -->
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <!-- 路由链接 -->
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>

            <!-- 缓存路由视图 -->
            <!-- include：只缓存该组件（组件内配置的组件名称） -->
            <keep-alive :include="['News', 'Message']">
                <!-- <keep-alive include="News, Message"> -->
                <!-- 路由视图 -->
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {};
</script>
