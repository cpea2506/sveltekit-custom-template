<script lang="ts">
    import { spring } from "svelte/motion";
    import FaMinus from "svelte-icons/fa/FaMinus.svelte";
    import FaPlus from "svelte-icons/fa/FaPlus.svelte";

    let count = 0;

    const displayed_count = spring();
    $: displayed_count.set(count);
    $: offset = modulo($displayed_count, 1);

    function modulo(n: number, m: number) {
        // handle negative numbers
        return ((n % m) + m) % m;
    }
</script>

<div class="counter my-4 mx-0 flex border-y border-y-[rgba(0,0,0,0.1)]">
    <button
        class="text-[2rem flex w-8 touch-manipulation items-center justify-center bg-transparent hover:bg-[#61afef]"
        on:click={() => (count -= 1)}
        aria-label="Decrease the counter by one"
    >
        <FaMinus />
    </button>

    <div class="relative h-16 w-32 overflow-hidden text-center">
        <div
            class="absolute h-full w-full"
            style="transform: translate(0, {100 * offset}%)"
        >
            <strong
                class="abosulte -top-[100%] flex h-full w-full select-none items-center justify-center text-[4rem] font-normal text-[#ec6075]"
                aria-hidden="true">{Math.floor($displayed_count + 1)}</strong
            >
            <strong>{Math.floor($displayed_count)}</strong>
        </div>
    </div>

    <button
        class="flex w-8 touch-manipulation items-center justify-center bg-transparent text-[2rem] hover:bg-[#61afef]"
        on:click={() => (count += 1)}
        aria-label="Increase the counter by one"
    >
        <FaPlus />
    </button>
</div>
