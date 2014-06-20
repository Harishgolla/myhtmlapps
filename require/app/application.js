
define(["app/variables"], function(v){
    alert(v.vowels);
    require.undef();
    return "this is an application"+ v.vowels;
});