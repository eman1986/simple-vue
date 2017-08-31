<template>
    <div>
        <div>
            {{ project.ProjectName }}
        </div>
        <div>
            {{ project.ProjectType }}
        </div>
        <div>
            <button v-on:click="deleteProject(project)">Delete</button>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: ['project'],
        methods: {
            deleteProject(project) {
                this.$emit('delete-project', project);
            }
        }
    };
</script>