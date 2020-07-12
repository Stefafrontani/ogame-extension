function addCargosToAttack() {
    let resources = $('span.ctn.ctn4.fright.tooltipRight.tooltipClose');
    let replacement;

    for (let i = 0; i<resources.length; i++) {
        let node = resources[i];
        let resourceWithoutDot = resources[i].innerText.split(' ')[1].replace('.', '')

        if (resourceWithoutDot.length === 5) {
            replacement = '000';
        }
        if (resourceWithoutDot.length === 4) {
            replacement = '0000';
        }
        if (resourceWithoutDot.length === 3) {
            replacement = '00000';
        }

        resource = resourceWithoutDot.replace('M', replacement);

        let numberResource = parseInt(resource);
        let smallCargos = Math.ceil((numberResource*0.75)/6250);
        let largeCargos = Math.ceil(smallCargos/5);

        node.innerText += `  (${(smallCargos)} | ${(largeCargos)})`;
    }
};

setTimeout(() => addCargosToAttack(), 3000)