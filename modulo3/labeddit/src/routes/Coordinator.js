export const goToLogin = (navigate) => {
    navigate("/")
}

export const goToSignUpPage = (navigate) => {
    navigate("/cadastro")
}

export const goTFeedPage = (navigate) => {
    navigate(`user/feed`)
}

export const goToCreateTripPage = (navigate) => {
    navigate(`/user/trips/create`)
}

export const goToPostPage= (navigate, id) => {
    navigate(`/user/postagem/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1);
}