import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core'

function InfoBox({title, cases, total}) {
    return (
        <Card className="InfoBox">
            <CardContent>
                {/* Title Coronavirus cases*/}
                <Typography className="InfoBox__title" color="textSecondary">
                    {title}
                </Typography>
                
                {/* +120 Number if cases */}
                <h2 className="InfoBox__cases">{cases}</h2>

                {/* 1.2M Total */}
                <Typography className="InfoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox

