<template>
    <div>
        <project v-on:delete-project="deleteProject" v-for="project in projects" :project.sync="project"></project>
    </div>
</template>

<script type = "text/javascript" >
    import Project from './Project';

    export default {
        props: ['projects'],
        components: {
            Project,
        },
        methods: {
            deleteProject: function (project) {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then(function () {
                    removeProject(project, 1);
                });

                this.projects.slice(project, 1);
            }
        }
    };
</script>