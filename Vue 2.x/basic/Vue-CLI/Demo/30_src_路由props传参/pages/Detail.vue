<template>
    <div>
        <ul>
            <li>消息编号：{{$route.query.id}}</li>
            <li>消息标题：{{$route.query.title}}</li>
            <h1>a:{{id}} b:{{title}}</h1>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        // props: ['a', 'b']    // props值为对象时
        props: ['id', 'title']
    }
</script>

<style>

</style>