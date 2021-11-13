// Ex5.6 - Mask

maskify = (mask) => {
    mask = mask.trim().split('');
    for (let i=0; (i<mask.length -4); i++){
        mask[i] = mask[i] = '#';
    } return mask.join('') ;
}
maskify('')
