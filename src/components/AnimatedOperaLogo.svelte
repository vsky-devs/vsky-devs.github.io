<script lang="ts">
    import { animate, timeline } from "motion";
    import { onMount } from "svelte";
    
    let path: SVGPathElement;
    let path1: SVGPathElement;
    let number: HTMLElement;

    function draw(progress: number) {
        return {
            strokeDashoffset: 1 - progress,
            visibility: "visible",
        }
    }

    onMount(() => {
        timeline([
            [path1, draw(1), { duration: 2.5,  }],
            [path, draw(1), { duration: .5, at: "-2" }],
        ])

        animate(
            (progress) => number.innerHTML = Math.round(progress * 100).toString(),
            { duration: 1.5, easing: "ease-out" }
        )
    })
</script>


<h2 class="text-4xl" bind:this={number}>0</h2>

<svg width="190" height="49" viewBox="0 0 190 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_119_26013)">
        <path bind:this={path} pathLength="1" d="M28.8584 9.0105C33.2014 11.8111 36.1643 17.6152 36.1643 24.3529C36.1643 31.0906 33.1608 36.8947 28.8584 39.6953C34.3784 39.2082 38.8025 32.5517 38.8025 24.3529C38.8025 16.154 34.3784 9.49756 28.8584 9.0105Z" fill="#D91A1A"/>
        <path bind:this={path1} pathLength="1" d="M39.1272 40.6695C36.5296 42.3742 33.5666 43.2671 30.5631 43.2671C25.6113 43.2671 20.9437 40.8724 17.6966 36.6918L17.656 36.6512C15.1801 33.7289 13.7189 29.4265 13.5972 24.8806V23.8253C13.7189 19.2794 15.1801 14.977 17.6966 12.0141C20.9437 7.83349 25.6113 5.43878 30.5631 5.43878C33.5666 5.43878 36.5296 6.33172 39.1272 8.03643C43.7543 12.217 46.3926 18.1429 46.3926 24.353C46.3926 30.5224 43.7543 36.4889 39.1272 40.6695ZM23.379 46.2707C11.6083 45.743 2.43536 36.083 2.43536 24.3124C2.43536 12.217 12.2983 2.31348 24.4343 2.31348C24.4343 2.31348 24.4748 2.31348 24.5154 2.31348C26.4231 2.31348 28.3307 2.59759 30.1572 3.08465C24.6372 3.20642 19.4825 5.92584 15.9513 10.5123C13.1507 13.8406 11.446 18.63 11.3648 23.7441V24.84C11.4866 29.9136 13.1507 34.703 15.9513 38.0312C19.5231 42.6583 24.6778 45.3777 30.1978 45.4995C27.9654 46.1489 25.6519 46.3924 23.379 46.2707ZM40.5884 6.20996C36.1643 2.2323 30.4413 0.0405273 24.4748 0.0405273C24.4748 0.0405273 24.4342 0.0405273 24.3937 0.0405273C10.9995 0.0405273 0.121826 10.9182 0.121826 24.3124C0.121826 37.3006 10.2689 47.9754 23.2572 48.5842C23.6225 48.5842 24.0284 48.6248 24.3937 48.6248C30.3601 48.6248 36.1237 46.433 40.5884 42.4554C45.7431 37.8689 48.7061 31.253 48.7061 24.353C48.7061 17.4123 45.7431 10.837 40.5884 6.20996Z" fill="#D91A1A"/>
    </g>
    <defs>
        <clipPath id="clip0_119_26013">
            <rect width="189.142" height="48.706" fill="white"/>
        </clipPath>
    </defs>
</svg>

<style>

  path {
    fill: transparent;
    stroke: #d40606;
    stroke-width: 1px;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    visibility: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>