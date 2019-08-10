import { GetterTree } from 'vuex';

export const namespaced = true;

export interface ProductInfo {
  productNo: number;
  name: string;
  registerYmdt: Date;
}

interface State {
  pageName: string;
  product: ProductInfo;
}

export const state: State = {
  pageName: '상품 페이지',
  product: {
    productNo: 0,
    name: '0번 상품',
    registerYmdt: new Date()
  }
};

export const getters: GetterTree<State, any> = {
  // CONSTANTS: state => {
  //     return state.constants
  //   }

  // productRegisterYear: (state, getters) => () => {
  //   return state.product.registerYmdt.getFullYear();
  // }
};
