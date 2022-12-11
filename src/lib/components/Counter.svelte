<script lang="ts">
    import { spring } from "svelte/motion";
    import { Icon } from "@steeze-ui/svelte-icon";
    import { Plus, Minus } from "@steeze-ui/heroicons";

    let count = 0;

    const displayed_count = spring();
    $: displayed_count.set(count);
    $: offset = modulo($displayed_count, 1);

    function modulo(n: number, m: number) {
        // handle negative numbers
        return ((n % m) + m) % m;
    }
</script>

<div class="counter my-4 flex border-y border-y-[rgba(0,0,0,0.1)]">
    <button
        class="flex w-8 touch-manipulation items-center justify-center bg-transparent text-[2rem] hover:bg-[#61afef]"
        on:click={() => (count -= 1)}
        aria-label="Decrease the counter by one"
    >
        <Icon src={Minus} theme="mini" />
    </button>
    <div class="relative h-16 w-32 overflow-hidden text-center">
        <div
            class="absolute h-full w-full"
            style="transform: translate(0, {100 * offset}%)"
        >
            <strong
                class="absolute -top-[100%] flex h-full w-full select-none items-center justify-center text-[4rem] font-normal text-[#ec6075]"
                aria-hidden="true">{Math.floor($displayed_count + 1)}</strong
            >
            <strong
                class="absolute flex h-full w-full items-center justify-center text-[4rem] font-normal text-[#ec6075]"
                >{Math.floor($displayed_count)}</strong
            >
        </div>
    </div>
    <button
        class="flex w-8 touch-manipulation items-center justify-center bg-transparent text-[2rem] hover:bg-[#61afef]"
        on:click={() => (count += 1)}
        aria-label="Increase the counter by one"
    >
        <Icon src={Plus} theme="mini" />
    </button>
</div>
