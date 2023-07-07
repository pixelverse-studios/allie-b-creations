import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useForm from '@/utils/hooks/useForm'
import FormValidations from '@/utils/validations/forms'
import { FileUpload, FormButtonGroup, TextField } from '@/components/form'
import { updateHomePage } from '@/lib/db/cms/home-page'
import { setHomePage } from '@/lib/redux/slices/homePage'
import { handleCloudUpload } from '@/utils/fileConversions'
import { enqueueSnackbar } from 'notistack'
import { statuses, messages } from '@/utils/banners'

const HeroForm = ({ banner, img }) => {
    return (
        <div>
            <div>{banner}</div>
            <div>{img}</div>
        </div>
    )
}

export default HeroForm
