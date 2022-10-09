<script setup>
import { computed, onMounted, ref, onUnmounted } from 'vue';
import JobSearch from './JobSearch.vue';

    let action = ref("Build")
            const actions = ref(["Build", "Create", "Design", "Code"])
    
			
    let i = ref(0);  // the index of the current item to show
	let intervel = ref(null)
    onMounted(() => {
        intervel.value = setInterval(function() {            // setInterval makes it run repeatedly
        action.value = actions.value[i.value++];
        if (i.value == actions.value.length) i.value = 0;   // reset to first element if you've reached the end
        }, 3000);        
    })
    
    onUnmounted(() => clearInterval(intervel.value))

    
    const actionClasses = computed(() => {
        return {
            build: action.value == 'Build',
            create: action.value == 'Create',
            design: action.value == 'Design',
            code: action.value == 'Code',
        }
    })
</script>
<template>
    <div>
        <h1 class=" fw-bold" style="font-size: 5rem;" :class="actionClasses">{{action}} </h1>
        <h1 class="fs-1 fw-bolder" style="color: black;">for everyone</h1>
        <br>
        <h5 class="mx-1">Find your next job at Google.</h5>
        <br>
        <JobSearch />
    </div>

</template>

<style scoped>
    .build{
        color: blue;
    }
    .code {
        color: red;
    }
    .design{
        color: rgb(187, 187, 9);
    }
    .create{
        color: green;
    }
</style>