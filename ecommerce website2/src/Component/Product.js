import React, { Component } from 'react';
import { actFetchProductsRequest, AddCart } from '.../actions'
import { connect } from 'react-redux';
export class Product extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.actFetchProductsRequest();
    }
    render() {
        const { _products } = this.props._products;
        if (_products.length > 0) {
            return (
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-md-12">
                        <div className="row">
                            {
                                _products.map((item, index) => (
                                    <div className="col-md-6 col-lg-3 mb-5">
                                        <div className="">
                                            <div className="view zoom overlay z-depth-2 rounded">
                                                <div className="mask">
                                                    <img className="img-fluid w-100" src={'https://flymaxindia.stnshops.com' + item.productimg[0]} />
                                                    <div className="mask rgba-black-slight"></div>
                                                </div>
                                            </div>
                                            <div className="pt-4">
                                                <h5 className="truncate-overflow">{item.title}</h5>
                                                <h6>{item.price}$<span className="badge badge-primary" style={{ cursor: 'pointer', float: 'right' }} onClick={() => this.props.AddCart(item)}>Add Cart</span></h6>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="row">
                <h2>Loading........!!!</h2>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)






