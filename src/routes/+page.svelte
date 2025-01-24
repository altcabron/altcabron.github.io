<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_outward" />
<script>
    import Footer from '@components/chrome/Footer.svelte';
    import Header from '@components/chrome/Header.svelte'
	import Brands from '@components/main/Brands.svelte';
	import Headline from '@components/main/Headline.svelte';
	import Photography from '@components/main/Photography.svelte';
	import Projects from '@components/main/Projects.svelte';
    import Title from '@components/Title.svelte'
</script>

<Header/>
<!-- <Title/> -->
<Headline/>
<Projects/>
    <hr class="border-dashed text-gray-200 container items-center max-w-screen-lg mx-auto">
<Photography/>
    <hr class="border-dashed text-gray-200 container items-center max-w-screen-lg mx-auto">
<Brands/>
<Footer/>