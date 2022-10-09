<script setup>
    import JobsSideBar from '../components/Jobs/JobsSideBar.vue';
    import JobSearchResults from '../components/Jobs/JobSearchResults.vue';
</script>


<template>
    <div class="d-flex flex-row">
        <div class="mt-3" style="width: 35%;">
            <JobsSideBar/>
        </div>
        <div class="flex-grow-1 pt-4 container" style="background-color: #f8f9fa;">
            <JobSearchResults/>
        </div>
        
    </div>
</template>