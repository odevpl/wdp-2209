import React from 'react';
import Button from '../../common/Button/Button';
import styles from './CartBox.module.scss';

const CartBox = () => {
  return (
    <>
      <header className={styles.headerCart}>
        <div className='container'>
          <h2 className={styles.headingTitle}>The Templace</h2>
        </div>
        <div className={styles.grayTitle}>
          <div className='container'>
            <h2 className={`${styles.headingTitleGray}`}>Cart</h2>
          </div>
        </div>
      </header>
      <div className='container'>
        <div className={styles.cartBox}>
          <div className={styles.product}>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col' colSpan={2}></th>
                  <th className={styles.leftAlign} scope='col' colSpan={3}>
                    PRODUCT
                  </th>
                  <th scope='col'>PRICE</th>
                  <th scope='col'>QUANTITY</th>
                  <th scope='col'>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>
                    <Button className={styles.removeBtn}>X</Button>
                  </th>
                  <td>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/products/aenean-ru-bristique-1.jpeg`}
                      alt='aenean-ru-bristique'
                      a
                    />
                  </td>
                  <td className={styles.leftAlign} colSpan={3}>
                    Placeholder Product 7
                  </td>
                  <td className={styles.price}>$5.00</td>
                  <td>
                    <form className={styles.amountWidget}>
                      <a>-</a>
                      <input type='number' defaultValue='1' />
                      <a>+</a>
                    </form>
                  </td>
                  <td className={styles.price}>$5.00</td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Button className={styles.removeBtn}>X</Button>
                  </th>
                  <td>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/products/aenean-ru-bristique-1.jpeg`}
                      alt='aenean-ru-bristique'
                      a
                    />
                  </td>
                  <td className={styles.leftAlign} colSpan={3}>
                    Placeholder Product 7
                  </td>
                  <td className={styles.price}>$5.00</td>
                  <td>
                    <form className={styles.amountWidget}>
                      <a>-</a>
                      <input type='number' defaultValue='1' />
                      <a>+</a>
                    </form>
                  </td>
                  <td className={styles.price}>$5.00</td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Button className={styles.removeBtn}>X</Button>
                  </th>
                  <td>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/products/aenean-ru-bristique-1.jpeg`}
                      alt='aenean-ru-bristique'
                      a
                    />
                  </td>
                  <td className={styles.leftAlign} colSpan={3}>
                    Placeholder Product 7
                  </td>
                  <td className={styles.price}>$5.00</td>
                  <td>
                    <form className={styles.amountWidget}>
                      <a>-</a>
                      <input type='number' defaultValue='1' />
                      <a>+</a>
                    </form>
                  </td>
                  <td className={styles.price}>$5.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th scope='row' colSpan={7}>
                    <form className={styles.leftAlign}>
                      <input type='text' placeholder='Coupon code' name='name' />
                      <Button className={styles.productBtn}>APPLY COUPON</Button>
                    </form>
                  </th>
                  <th scope='row'>
                    <Button className={styles.productBtn}>UPDATE CART</Button>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className={`row ${styles.cartTotals}`}>
          <div className='col-6'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col' colSpan={4}>
                    Product
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Subtotal</th>
                  <td colSpan={4}>
                    <p className={styles.price}>$92.00</p>
                  </td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td colSpan={3}>
                    <p className={styles.price}>$922.00</p>
                  </td>
                </tr>
                <tr>
                  <th scope='col' colSpan={4}>
                    <Button href='/' className={`${styles.totalCartBtn} btn`}>
                      PROCEED TO CHECKOUT
                    </Button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartBox;
