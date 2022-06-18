import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
     projectId: "trpuobsa",
     dataset: 'production',
     apiVersion: '2022-02-01',
     useCdn: true,
     token: "skinUVyjNtx3itBrJagOt92T7ITaBaY5p1Hjt12RDQFU6tcliFAN2kwA7T47kBgksbgOqpf4YuDHJohFN5tSLw67C2nmQiDK40ePwgSTV0slO7KlVmnae7zvVXMlMkogRk4wO5w13YNiT5KYPEqRdoGthkHti0cU3FuYkReRajFcLzo88F72",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);