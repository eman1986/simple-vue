<template>
    <div id="app">
        <h1 class="ui dividing centered header">Vue.js Todo App</h1>
        <div class='ui three column centered grid'>
            <div class='column'>
                <project-list v-bind:todos="projects"></project-list>
                <create-project v-on:create-todo="createProject"></create-project>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {
            ProjectList,
            CreateProject,
        },
        data() {
            return {
                projects: [
                    {
                        ProjectName: "Project A",
                        ProjectType: "Social"
                    },
                    {
                        ProjectName: "Project Brook",
                        ProjectType: "Development"
                    }
                ],
            };
        },
        methods: {
            createProject: function (project) {
                this.projects.push(project);
                this.$swal('Success!', 'You clicked the button!', 'success');
            }
        }
    };
</script>