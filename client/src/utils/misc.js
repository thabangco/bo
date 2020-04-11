
// number formatting function
const makeNumber = what => {

    return parseFloat(what).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}

export default makeNumber;