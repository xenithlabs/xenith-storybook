const a=r=>r.replace(/[_]/g," ").replace(/\w\S*/g,e=>["a","an","of"].includes(e)?e.toLowerCase():e.charAt(0).toUpperCase()+e.substr(1).toLowerCase());export{a as t};
