<template>
    <div id="app">
        <h1>Vue.js Project App</h1>
        <div>
            <project-list v-bind:todos="projects"></project-list>
            <create-project v-on:create-todo="createProject"></create-project>
        </div>
    </div>
</template>

<script>
    import ProjectList from './components/ProjectList';
    import CreateProject from './components/createProject';

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