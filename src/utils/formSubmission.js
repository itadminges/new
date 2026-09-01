export async function submitWebsiteForm(formType, payload) {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

  if (!endpoint) {
    return {
      ok: false,
      reason: 'missing-endpoint',
      message: 'This form is not connected yet. Please contact Shomoukh by phone, WhatsApp, or email while the website form endpoint is configured.'
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        formType,
        submittedAt: new Date().toISOString(),
        ...payload
      })
    });

    if (!response.ok) {
      return {
        ok: false,
        reason: 'server-error',
        message: 'We could not submit the form just now. Please try again or contact the nursery directly.'
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      reason: 'network-error',
      message: 'The form could not reach the admissions team. Please check your connection or contact the nursery directly.'
    };
  }
}
