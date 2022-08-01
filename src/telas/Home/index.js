import React from 'react';

import Produtores from './componentes/Produtores';
import Topo from './componentes/Topo';

export default function Home() {
    return <Produtores topo={Topo}/>
}