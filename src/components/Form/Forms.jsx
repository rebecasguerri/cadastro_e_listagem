import styles from "./Forms.module.css";
import Btncadaster from "../btncadaster/Btncadaster";
function Forms() {
  return (
    <section className={styles.form_container}>
      <h3 className={styles.title}>Cadastrar Produtos</h3>
      <form action="" className={styles.form_content}>
        <label htmlFor="name-product" className={styles.label}>
          Nome:{" "}
        </label>
        <input
          type="text"
          name="name"
          id="name-product"
          className={styles.input}
        />

        <label htmlFor="description-product" className={styles.label}>
          Descrição:{" "}
        </label>
        <input
          type="text"
          name="description"
          id="description-product"
          className={styles.input}
        />

        <label htmlFor="value-product" className={styles.label}>
          Valor:
        </label>
        <input
          type="number"
          name="value"
          id="value-product"
          className={styles.input}
        />

        <label htmlFor="avaliable" className={styles.label}>
          Produto disponivel?{" "}
        </label>
        <select id="valiable" className={styles.input}>
          <option value="sim">Sim</option>
          <option value="não">Não</option>
        </select>
        <Btncadaster />
      </form>
    </section>
  );
}

export default Forms;
