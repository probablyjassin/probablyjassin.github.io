<template>
    <div>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout'
}
</script>

<style scoped>
nav {
    background-color: #333;
    color: white;
    padding: 1rem;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

main {
    padding: 1rem;
}
</style>
</div>