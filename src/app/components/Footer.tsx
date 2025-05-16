import Link from "next/link";
import styles from "./Footer.module.scss"
import Button from "./Button";

/**
 * Component that displays the footer, to be imported in every page
 */
export default function Footer() {
  const twoWeeksAgo = Date.now() - 14 * 24 * 60 * 60 * 1000;

  return (
    <div className={styles.footer}>
      <div className={styles.buttonAreaWrapper}>
        <div className={styles.buttonArea}>
          <Link href="https://linkedin.com/in/jezzlucena" target="_blank">
            <Button theme="light" className={ styles.button }>LinkedIn</Button>
          </Link>
          <Link href="https://github.com/jezzlucena" target="_blank">
            <Button theme="light" className={ styles.button }>GitHub</Button>
          </Link>
          <Link href="/resume#content">
            <Button theme="light" className={ styles.button }>Resumé</Button>
          </Link>
          <Link href="/contact#content">
            <Button theme="light" className={ styles.button }>Contact</Button>
          </Link>

          <br/>
          <br/>

          <div className={styles.emailText}>
            ...or reach out directly at <b><u><a href="mailto:jezzlucena@gmail.com">jezzlucena@gmail.com</a></u></b>
          </div>
        </div>
      </div>

      <div className={styles.disclaimer}>
        Creative Commons Attribution-ShareAlike License<br/>
        Last updated in { (new Date(twoWeeksAgo)).toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' }) }. <a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/2.0/">Some Rights Reserved</a>.<br/>
        Read our <Link href="/privacy#content">Privacy Policy.</Link> Use of this website or apps is subject to our <Link href="/terms#content">Terms and Conditions.</Link>
      </div>
    </div>
  )
}