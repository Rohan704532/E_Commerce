 
import Items from '../Items/Items'
import {connect} from "react-redux"
import {addToCart, removeFromCart} from "../Action/Action"

const mapDispatchToProps = dispatch=>({
    addToCartandler:data=>dispatch(addToCart(data))
})

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,mapDispatchToProps)(Items)