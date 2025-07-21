document.addEventListener('DOMContentLoaded', () => {

    const { createApp } = Vue;

    const app = createApp({
        data() {
            return {
                count: 0
            };
        }
    });
    app.config.compilerOptions.delimiters = ['[[', ']]'];
    app.mount('#vue-app');
});