import Head from "next/head";

type HeadSeoProps = {
    title : string;
}

const HeadSeo = ({ title } : HeadSeoProps) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}

export default HeadSeo;