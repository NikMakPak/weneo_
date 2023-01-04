export default function renderPageMarkup(blocksArr){
    function toStyleAttribute(obj) {
        return Object.keys(obj).map(function(key) {
          
          // Camel case property names to CSS selector names.
          return (key.replace(/([A-Z])/g, '-$1').toLowerCase()) + 
              ':' + obj[key]
      
        }).join(';')}
        
    return {__html: blocksArr.map((block)=> {
        return `<div style="${toStyleAttribute(block.mainStyle)}">${Object.entries(block.elements || {}).map((e) => {
            return (
                `<${e[0].replace(/_([0-9])/gi, "")} placeholder="${e[1].val}" style="${
                    toStyleAttribute(e[1])
                }">${typeof(e[1].val) === "object" ? Object.entries(e[1].val || {}).map((el) => {
                    return (
                        `<${el[0].replace(/_([0-9])/gi, "")} style="${
                            toStyleAttribute(el[1])
                        }">${el[1].val}</${el[0].replace(/_([0-9])/gi, "")}>`
                    )
                }).join(''):e[0].replace(/_([0-9])/gi, "") === 'input' ? '' : e[1].val}</${e[0].replace(/_([0-9])/gi, "")}>`
            )
        }).join('')}</div>`
    }).join('')}
}