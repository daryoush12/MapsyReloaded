import React, { useState } from 'react'
import { MehFilled } from '@ant-design/icons'
import { Card } from 'antd'

export default function Place() {
    const [showData, setShowData] = useState(false)

    const onHover = (e) => {
        e.preventDefault()
        setShowData(true)
    }

    const onHoverEnd = (e) => {
        e.preventDefault()
        setShowData(false)
    }

    return (
        <div onPointerEnter={onHover} onPointerLeave={onHoverEnd}>
            {showData && (
                <Card
                    size="small"
                    title="Small size card"
                    extra={<a href="#">More</a>}
                    style={{ width: 300, position: 'absolute', right: '129%' }}
                >
                    Some cool information about place
                </Card>
            )}
            <MehFilled style={{ fontSize: '30px', color: '#08c' }} />
        </div>
    )
}
