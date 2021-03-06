import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Box, Button, Flex, Image } from 'rebass'
import Text from 'components/common/Text'
import { useConfig } from 'lib/hooks/useConfig'
import { uploadImage } from 'lib/media'

type UploadImageProps = {
    onUploadedImage?: (resizedImage: String) => void
    isImageVisibleInBox?: Boolean
    isTextAboveBrowseButton?: Boolean
}
function UploadImage({
    onUploadedImage,
    isImageVisibleInBox = false,
    isTextAboveBrowseButton = false,
}: UploadImageProps) {
    const [loading, setLoading] = useState(false)
    const [uploadedImage, setUploadedImage] = useState(undefined)
    const { cloudinaryConfig } = useConfig()
    const { cloudinaryAPIEndpoint } = cloudinaryConfig
    const uploadURL = `${cloudinaryAPIEndpoint}/image/upload`

    const onDrop = useCallback(
        async acceptedFiles => {
            setLoading(true)

            const { secure_url } = await uploadImage(
                acceptedFiles[0],
                uploadURL
            )
            const resizedImage = secure_url.replace(
                '/upload',
                '/upload/w_250,c_scale'
            )

            setLoading(false)
            setUploadedImage(resizedImage)
            if (onUploadedImage) {
                onUploadedImage(secure_url)
            }
        },
        [onUploadedImage, uploadURL]
    )
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    })

    return (
        <Box
            width={[1, 1, 1]}
            sx={{
                borderRadius: '4px',
                border: '1px dashed',
                p: 2,
            }}
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            {loading ? (
                <Text as="body">Loading ...</Text>
            ) : isDragActive ? (
                <Text as="body">Drop the files here ...</Text>
            ) : (
                <Box sx={{ textAlign: 'left' }}>
                    <Box
                        sx={{
                            textAlign: isTextAboveBrowseButton
                                ? 'center'
                                : 'left',
                        }}
                    >
                        <Box>
                            <Text
                                as="body"
                                sx={{
                                    color: '#6F63AD',
                                }}
                            >
                                Image (optional)
                            </Text>
                        </Box>
                        <Box
                            sx={{
                                display: isTextAboveBrowseButton
                                    ? 'block'
                                    : 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box>
                                <Text as="body">
                                    Drop or choose file from computer
                                </Text>
                            </Box>
                            <Box>
                                <Button>Choose Image</Button>
                            </Box>
                        </Box>
                    </Box>
                    {isImageVisibleInBox && uploadedImage && (
                        <Box width={250}>
                            <Image
                                src={uploadedImage}
                                sx={{
                                    width: ['100%'],
                                }}
                            />
                        </Box>
                    )}
                </Box>
            )}
        </Box>
    )
}

export default UploadImage
