import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([
    cart,
  ])
}

// O * após a função tem um papel semelhante ao 'async'
// O 'yield' tem a função semelhante ao 'await'

// O 'Async' depois se torna '*' (generator).