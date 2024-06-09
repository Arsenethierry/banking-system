import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

function Home() {
    return (
        <section className='home'>
            <div className="home-content">
                <header className='home-header'>
                    <HeaderBox
                        title='Welcome'
                        type='greeting'
                        user='Arsene'
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={10}
                        totalCurrentBalance={100}
                    />
                </header>
            </div>
        </section>
    )
}

export default Home