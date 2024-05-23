
// import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    bgcolor: '#4e4e4e',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '@media (max-width: 768px)': {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

function MemberShipModal({ membership, handleClose, open }) {

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography className="section-title text-light price" id="transition-modal-title" variant="h6" component="h2">
                            {membership.title}
                        </Typography>
                        {/* <Typography id="transition-modal-price" sx={{ mt: 2 }}>
                            {membership.price}
                        </Typography>
                        <Typography id="transition-modal-features" sx={{ mt: 2 }}>
                            {membership.features}
                        </Typography> */}

                        <div className="container-ship flex-ship me-5">
                            <div className="flex_content-ship flex2-ship">
                                <h2 className="text-light price">Basic</h2>
                                <h4 className="text-light price">Free</h4>
                                <span>3,000 monthly visitors</span>
                                <ul>
                                    <li>Limited Reports</li>
                                    <li>Unlimited projects</li>
                                    <li>Data storage for 1 year</li>
                                </ul>
                                <button className="default-btn">
                                    Start Now
                                </button>
                            </div>
                            <div className="flex_content-ship flex2-ship">
                                <h2 className="text-light price">Pro</h2>
                                <h4 className="text-light price">$19 / month</h4>
                                <span>10,000 monthly visitors</span>
                                <ul>
                                    <li>Unlimited Reports</li>
                                    <li>15-days free trial</li>
                                    <li>Data storage for 3 year</li>
                                </ul>
                                <button className="default-btn">
                                    Try it
                                </button>
                            </div>
                        </div>

                    </Box>
                </Fade>
            </Modal>
        </div>

    );
}

export default MemberShipModal;