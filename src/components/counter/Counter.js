
import { Component } from 'react';
import Button from '../button/Button';

// Hasta que aprendamos a usar Hooks los componentes con estado los definiremos como clases que heredan de Component
//
// Si tiene estado => class
// Si no tiene estado => function
class Counter extends Component {

  // Definimos el estado inicial del componente (es lo mismo que hacerlo usando constructor)
  state = {
    count: 0
  }

  handleClick = (amount) => {
    // Hay que tener siempre en cuenta que el estado y las propiedades de un componente pueden cambiar en cualquier momento.
    // Cuando llamamos a la función setState no se ejecuta el cambio del estado en ese mismo momento, la función es asíncrona.
    //
    // Modificaciones del state (¡¡IMPORTANTE!!):
    //
    // - Cuando el nuevo estado no depende de nada:
    //   Pasamos el objeto del nuevo estado directamente, con los atributos que queramos modificar
    //   this.setState({ count: 10 })
    //
    // - Cuando el nuevo estado depende del anterior o de una propiedad:
    //   this.setState((state, props) => ({ count: state.count + 1 }))
    //
    this.setState((state, props) => {
      const { count } = state;
      const { min, max } = props;
      // Devolvemos el nuevo estado modificado
      return {
        count: amount > 0 ? Math.min(count + amount, max) : Math.max(count + amount, min)
      }
    })
  }

  render() {
    const { count } = this.state;
    const { max, min } = this.props;

    let color;
    if (count === 0) {
      color = 'dark';
    } else if (count > 0) {
      color = 'success';
    } else {
      color = 'danger';
    }

    return (
      <div className="Counter d-flex flex-column align-items-center border p-3 bg-light">
        <span className={`count fs-3 text-${color}`}>{count}</span>
        <div className="actions d-flex ">
          <Button icon="minus" type="secondary" size="sm" className="me-1" onClick={() => this.handleClick(-1)} disabled={count === min}/>
          <Button icon="plus" type="primary" size="sm" onClick={() => this.handleClick(1)} disabled={count === max} />
        </div>
      </div>
    );
  }
}

// Definimos las propiedades por defecto de este componente.
Counter.defaultProps = {
  min: -10,
  max: 10
}


export default Counter;
