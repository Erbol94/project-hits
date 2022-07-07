import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHitsAction } from '../../redux/actions/actions'
import Preview from '../preview/Preview';
import classes from './Hity.module.css'

const Hity = (props) => {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.hitsProduct.product)
    useEffect(() => {
        dispatch(getHitsAction(10))
    }, [])
    useEffect(() => {
        console.log(pokemon);
    }, [pokemon])
    return (
        <div className='container'>
            <h1>хиты продаж</h1>
            <div className={classes.block}>
                {
                    pokemon.length > 0
                        ?
                        pokemon.map((todo) =>
                            <Preview key={todo.id} todo={todo} />
                        )
                        :
                        'fsffsd'
                }
            </div>
        </div>
    );
};

export default Hity;