<script lang="ts">
    import Counter from "$components/Counter.svelte";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-1 flex-col items-center justify-center">
    <picture>
        <source srcset="svelte-welcome.webp" type="image/webp" />
        <img src="svelte-welcome.png" alt="Welcome" />
    </picture>

    <Counter />
</section>
