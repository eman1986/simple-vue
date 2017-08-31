<template>
    <div>
        <div>
            <label>Project name</label>
            <input v-model="ProjectName" type="text">
        </div>
        <div>
            <label>Project Type</label>
            <input v-model="ProjectType" type="text">
        </div>
        <div>
            <button v-on:click="sendForm()">
                Create
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ProjectName: '',
                ProjectType: ''
            };
        },
        methods: {
            sendForm() {
                if (this.ProjectName.length > 0 && this.ProjectType.length > 0)
                {
                    const projectName = this.ProjectName;
                    const projectType = this.ProjectType;

                    this.$emit('create-project', {
                        projectName,
                        projectType
                    });

                    this.ProjectName = '';
                    this.ProjectType = '';
                }
            }
        }
    };
</script>