import React from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'


const styles = {
    listItem: {
         fontSize: '25px',
         fontFamily: 'Anton'
        }
}
const Contact = () => {
    return(
       <div className="contact-body">
           <Grid className='contact-grid'>
                <Cell col={6}>
                    <h2> Enmanuel Castillo</h2>
                    <img src="https://thumbs.dreamstime.com/z/icono-del-perfil-avatar-defecto-placeholder-gris-de-la-foto-102846161.jpg" alt="Avatar de perfil" style={{height: '250px'}}/>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, maxime? Maxime earum eveniet magni aspernatur voluptate dolore sit, saepe deserunt accusamus fugiat nihil aperiam consectetur. Rem dicta iusto exercitationem at.
                    Voluptas eligendi sit quisquam molestias corrupti rerum ullam odit ex eaque?</p>
                </Cell>

                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className='contact-list'>
                        <List>

                            <ListItem>
                                <ListItemContent style={styles.listItem} icon='call'>
                                   (809)-705-9525
                                </ListItemContent>
                            </ListItem>


                            <ListItem>
                                   <ListItemContent style={styles.listItem} icon='email'>
                                       enmanuel.castillo@hotmail.com
                                    </ListItemContent>
                            </ListItem>


                            <ListItem>
                                <ListItemContent style={styles.listItem} icon='mail_outline'>
                                  nmnlcstll@gmail.com
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                </Cell>
           </Grid>
       </div>
    )
}
export default Contact