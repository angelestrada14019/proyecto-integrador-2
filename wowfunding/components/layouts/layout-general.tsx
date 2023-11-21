import * as React from 'react';
import {FC, PropsWithChildren} from "react";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import GeneralHeader from "components/layouts/header/general-header.component";
import GeneralFooter from "components/layouts/footer-general/general-footer.component";


const LayoutGeneral: FC<PropsWithChildren> = ({children}: PropsWithChildren) => {

    return (<>
            <Stack direction={"column"} height={'100%'} >
                <GeneralHeader />
                <Box display={'flex'} flexGrow={1} justifyContent={'center'} >
                    {children}
                </Box>
                <GeneralFooter />
            </Stack>
        </>
    );
};
export default LayoutGeneral;