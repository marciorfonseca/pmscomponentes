import PmsTables  from "./components/PmsTable.vue";

const PmsTableUnit = {
    install(Vue, options){
        Vue.component("pms-table",PmsTables);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(PmsTableUnit);
}

export default PmsTableUnit;
