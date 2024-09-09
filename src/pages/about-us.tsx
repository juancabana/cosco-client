import Layout from "@/layout";
import React,{ type FC } from "react";
import type { PageProps } from "gatsby";
import ContentAboutUs from "@/components/containers/content-aboutUs"

const AboutUsPage: FC<PageProps> = () => (
    <Layout>
        <ContentAboutUs/>
    </Layout>
)

export default AboutUsPage;