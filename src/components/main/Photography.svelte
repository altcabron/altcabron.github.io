<script>
    import photoData from "@data/photo.json"
    let photoArray = photoData.imageArray
</script>

<div class="container flex flex-col gap-20 max-w-screen-lg mx-auto text-black py-40">
    <div class="flex gap-16">
        <h2 class="text-header eiko font-black">Photography</h2>
        <p class="objectsans flex-shrink">
            Lately I’ve been getting more and more into photography (This is usually exacerbated by a holiday).
            Let me use this as a way for you to get to know me just that little bit better.
        </p>
        <div class="flex objectsans gap-1 text-black">
            <a class="whitespace-nowrap" href="https://google.com">more photo's</a> <span class="material-symbols-outlined">arrow_outward</span>
        </div>
    </div>
    <div class="flex items-center w-screen gap-6">
        {#each photoArray as photoObject}
        <img src={photoObject.img} class={photoObject.isVertical ? "img-vert" : "img-hor"} alt={photoObject.alt} />
        {/each}
    </div>
</div>