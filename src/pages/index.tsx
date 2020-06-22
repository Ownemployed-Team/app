import { Flex, Box, Image } from 'rebass'
import Link from 'next/link'
import Text from 'components/common/Text'
import Layout from 'components/layout/Layout'
import Button from 'components/common/Button'
import { useAuth } from 'use-auth0-hooks'

const Home = () => {
    return (
        <Layout boxed={false}>
            <Hero />
            <Actions />
            <Initiative />
            <Skills />
            <Reasons />
            <CallToAction />
        </Layout>
    )
}

export default Home

function Hero() {
    return (
        <>
            <Flex mt={5} flexWrap="wrap" pr={[4, 4, 7]} pl={[4, 4, 7]}>
                <Box width={[1, 1, 1 / 2]} mb={[0, 0, 5]}>
                    <Box>
                        <Text
                            as="h2"
                            sx={{
                                lineHeight: '36px',
                            }}
                        >
                            Unemployed?
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            as="h1"
                            sx={{
                                fontWeight: 'bold',
                                lineHeight: '66px',
                            }}
                        >
                            No,{' '}
                            <span style={{ textDecoration: 'underline' }}>
                                Own
                            </span>
                            employed!
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            as="h2"
                            sx={{
                                color: 'body',
                                lineHeight: '36px',
                            }}
                        >
                            Why wait to be employed, when you can be an
                            entrepreneur?
                        </Text>
                    </Box>
                    <Box my={2}>
                        <Link href="/projects">
                            <Button
                                sx={{
                                    height: '72px',
                                    my: 4,
                                    width: ['200px', '300px', '500px'],
                                }}
                            >
                                <Text
                                    as="h2"
                                    sx={{
                                        color: '#fff',
                                    }}
                                >
                                    Find a Project
                                </Text>
                            </Button>
                        </Link>
                    </Box>
                </Box>

                <Box width={[1, 1, 1 / 2]} mb={[0, 0, 5]}>
                    <Image
                        sx={{
                            display: ['none', 'none', 'block'],
                            height: '419px',
                            width: '100%',
                        }}
                        src="/imgs/illustrations/homepage-ideas.svg"
                    />
                </Box>
            </Flex>
        </>
    )
}

function Actions() {
    const actions = [
        {
            body:
                'Looking to round out your team? Find people with the skills and drive to make your project a success.',
            image: '/imgs/illustrations/find-people.svg',
            title: 'Find People',
            url: '/members',
        },

        {
            body:
                'Bring your talents to an idea you care about. Choose a project that aligns with your goals, values, and work style.',
            image: '/imgs/illustrations/find-projects.svg',
            title: 'Find Projects',
            url: '/projects',
        },

        {
            body:
                'Our collection of resources are here to help you every step of the way. You’ve got questions, we’ve got answers.',
            image: '/imgs/illustrations/learn-and-build.svg',
            title: 'Learn and Build',
            url: 'https://ownemployed.tribe.so/',
        },
    ]

    return (
        <Flex
            pr={[4, 4, 7]}
            pl={[4, 4, 7]}
            sx={{
                flexDirection: ['column', 'column', 'row'],
                justifyContent: 'space-between',
            }}
        >
            {actions.map(({ body, image, title, url }, index) => {
                return (
                    <Box
                        key={index}
                        sx={{
                            mt: [4, 4, 0],
                            width: ['100%', '100%', '30%'],
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: '#f7f8fc',
                                mb: 4,
                                px: 2,
                            }}
                        >
                            {url.startsWith('http') ? (
                                <a href={url}>
                                    <Image
                                        sx={{
                                            width: '100%',
                                        }}
                                        src={image}
                                    />
                                </a>
                            ) : (
                                <Link href={url}>
                                    <Image
                                        sx={{
                                            width: '100%',
                                        }}
                                        src={image}
                                    />
                                </Link>
                            )}
                        </Box>
                        <Box m={2}>
                            <Text
                                as="h2"
                                sx={{
                                    lineHeight: '36px',
                                    textAlign: 'center',
                                }}
                            >
                                {title}
                            </Text>
                        </Box>
                        <Box>
                            <Text
                                as="h3"
                                sx={{
                                    lineHeight: '32px',
                                }}
                            >
                                {body}
                            </Text>
                        </Box>
                    </Box>
                )
            })}
        </Flex>
    )
}

function Initiative() {
    return (
        <Flex
            pr={[4, 4, 7]}
            pl={[4, 4, 7]}
            sx={{
                ml: 0,
                mr: 0,
                mt: 6,
                pt: 6,
                pb: 6,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundImage: 'url("/imgs/section_bg.png")',
                backgroundSize: '100% 80%',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Box width={[1, 1, 1 / 2]} mb={[0, 0, 5]} mr={[0, 0, 5]}>
                <Image
                    sx={{
                        height: '331px',
                        width: '100%',
                        display: ['none', 'none', 'block'],
                    }}
                    src="/imgs/illustrations/social.svg"
                />
            </Box>
            <Box width={[1, 1, 1 / 2]} mb={[0, 0, 5]}>
                <Text as="h2" sx={{ my: 2 }}>
                    A COVID-19 Initiative
                </Text>
                <Text as="h3" sx={{ mb: 4 }}>
                    This platform was built to help people forge their own path
                    amidst our current environment.
                </Text>
                <Text as="h3">
                    We believe the economy of the future will be driven by you.
                </Text>
            </Box>
        </Flex>
    )
}

function Reasons() {
    const reasons = [
        {
            title: 'Recession = opportunity',
            icon: '/imgs/icons/idea.svg',
            body:
                'Instagram, Whatsapp, Uber, Pintrest, Slack, Groupon, and Venmo were all founded during the 2008 global recession.',
        },

        {
            title: 'High unemployment rate',
            icon: '/imgs/icons/bars.svg',
            body:
                'Competition for jobs is higher than ever. You can wait to be chosen, or you can pick yourself.',
        },

        {
            title: 'Entrepreneurs are the future',
            icon: '/imgs/icons/conn.svg',
            body:
                'Our world is shaped by the ideas of people like Gates, Jobs, and Zuckerberg. The future belongs to innovators and entrepreneurs.',
        },
    ]

    return (
        <Flex
            pr={[4, 4, 7]}
            pl={[4, 4, 7]}
            sx={{
                backgroundImage: 'url("/imgs/section_bg.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                flexDirection: ['column', 'column', 'row'],
                justifyContent: 'space-between',
                ml: 0,
                mr: 0,
                mt: 4,
                pb: 6,
                pt: 6,
            }}
        >
            {reasons.map((reason, index) => {
                return (
                    <Box
                        key={index}
                        sx={{
                            mt: [4, 4, 0],
                            width: ['100%', '100%', '30%'],
                        }}
                    >
                        <Image
                            sx={{
                                mb: 4,
                                mx: 'auto',
                                width: '30%',
                            }}
                            src={reason.icon}
                        />
                        <Text as="h3">{reason.title}</Text>
                        <Text>{reason.body}</Text>
                    </Box>
                )
            })}
        </Flex>
    )
}

function Skills() {
    return (
        <Flex flexWrap="wrap" mt={6} pr={[4, 4, 7]} pl={[4, 4, 7]}>
            <Box width={[1, 1, 2 / 3]} mb={[0, 0, 5]}>
                <Text
                    as="h2"
                    sx={{
                        fontWeight: 'normal',
                        lineHeight: '52px',
                    }}
                >
                    Turn your skills and passion into your next opportunity.
                </Text>

                <Text as="body">
                    Embrace entrepreneurship as the next step in your career.
                </Text>
            </Box>

            <Box width={[1, 1, 1 / 3]} mb={[0, 0, 5]}>
                <Image
                    sx={{
                        display: ['none', 'none', 'block'],
                        width: '100%',
                    }}
                    src="/imgs/illustrations/board.svg"
                />
            </Box>
        </Flex>
    )
}

function CallToAction() {
    const { isAuthenticated, login } = useAuth()
    return (
        <Flex flexWrap="wrap" mt={5} pr={[4, 4, 7]} pl={[4, 4, 7]}>
            <Box width={[1, 1, 2 / 3]} mb={[0, 0, 5]}>
                <Text
                    as="h2"
                    sx={{
                        fontWeight: 'normal',
                        lineHeight: '52px',
                    }}
                >
                    Ready to join our community and transform the world?
                </Text>
                {!isAuthenticated && (
                    <Button
                        variant="link"
                        sx={{
                            fontSize: 'body',
                            marginTop: 4,
                            pb: 2,
                            pl: 4,
                            pr: 4,
                            pt: 2,
                        }}
                        onClick={() => login({})}
                    >
                        Create an Account
                    </Button>
                )}
            </Box>

            <Box width={[1, 1, 1 / 3]} mb={[0, 0, 5]}>
                <Image
                    src="/imgs/illustrations/team.svg"
                    sx={{
                        display: ['none', 'none', 'block'],
                        width: '100%',
                    }}
                />
            </Box>
        </Flex>
    )
}
