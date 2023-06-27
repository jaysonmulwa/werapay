import React, { lazy } from "react";

const NavAlt2ComponentLazy = lazy(() => import("./NavAlt2Component.js"));

const FooterComponentLazy = lazy(() => import("./FooterComponent.js"));

function TermsComponent(props) {
  return (
    <div className='bg-gray-200'>
      <NavAlt2ComponentLazy />

      <section className='pattern-dots-xl text-blue-200 body-font'>
        <div className='container px-5 py-12 mx-auto flex flex-wrap'>
          <h2 className='sm:text-4xl text-3xl text-gray-900 font-bold title-font mb-2 md:w-1/5'>
            Terms of Use
          </h2>
          <div className='md:w-4/5 md:pl-6 text-gray-700'></div>
        </div>
      </section>

      <section className='text-gray-700 body-font'>
        <div className='container px-5 py-12 mx-auto flex flex-wrap'>
          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  1. Terms
                </h2>
                <p className='leading-relaxed'>
                  By accessing this web site, you are agreeing to be bound by
                  these web site Terms and Conditions of Use, our Privacy
                  Policy, all applicable laws and regulations, and agree that
                  you are responsible for compliance with any applicable local
                  laws. If you do not agree with any of these terms, you are
                  prohibited from using or accessing this site. The materials
                  contained in this web site are protected by applicable
                  copyright and trade mark law.
                </p>
              </div>
            </div>
          </div>

          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  2. Use License
                </h2>
                <p className='leading-relaxed'>
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on Salario's web site for
                  personal, non-commercial transitory viewing only. This is the
                  grant of a license, not a transfer of title, and under this
                  license you may not:
                  <br />
                  i) modify or copy the materials;
                  <br />
                  ii) use the materials for any commercial purpose, or for any
                  public display (commercial or non-commercial);
                  <br />
                  iii) attempt to decompile or reverse engineer any software
                  contained on Salario's web site;
                  <br />
                  iv) remove any copyright or other proprietary notations from
                  the materials; or
                  <br />
                  v) transfer the materials to another person or "mirror" the
                  materials on any other server.
                  <br />
                  This license shall automatically terminate if you violate any
                  of these restrictions and may be terminated by Salario at any
                  time. Upon terminating your viewing of these materials or upon
                  the termination of this license, you must destroy any
                  downloaded materials in your possession whether in electronic
                  or printed format.
                </p>
              </div>
            </div>
          </div>

          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  3. Disclaimer
                </h2>
                <p className='leading-relaxed'>
                  The materials on Salario's web site are provided "as is".
                  Salario makes no warranties, expressed or implied, and hereby
                  disclaims and negates all other warranties, including without
                  limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights. Further, Salario does not warrant or make any
                  representations concerning the accuracy, likely results, or
                  reliability of the use of the materials on its Internet web
                  site or otherwise relating to such materials or on any sites
                  linked to this site.
                </p>
              </div>
            </div>
          </div>

          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  4. Limitations
                </h2>
                <p className='leading-relaxed'>
                  In no event shall Salario or its suppliers be liable for any
                  damages (including, without limitation, damages for loss of
                  data or profit, or due to business interruption,) arising out
                  of the use or inability to use the materials on Salario's
                  Internet site, even if Salario or an authorized representative
                  has been notified orally or in writing of the possibility of
                  such damage. Because some jurisdictions do not allow
                  limitations on implied warranties, or limitations of liability
                  for consequential or incidental damages, these limitations may
                  not apply to you.
                </p>{" "}
              </div>
            </div>
          </div>

          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  5. Revisions and Errata
                </h2>
                <p className='leading-relaxed'>
                  The materials appearing on Salario's web site could include
                  technical, typographical, or photographic errors. Salario does
                  not warrant that any of the materials on its web site are
                  accurate, complete, or current. Salario may make changes to
                  the materials contained on its web site at any time without
                  notice. Salario does not, however, make any commitment to
                  update the materials.
                </p>{" "}
              </div>
            </div>
          </div>

          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  6. Links
                </h2>
                <p className='leading-relaxed'>
                  Salario has not reviewed all of the sites linked to its
                  Internet web site and is not responsible for the contents of
                  any such linked site. The inclusion of any link does not imply
                  endorsement by Salario of the site. Use of any such linked web
                  site is at the user's own risk.
                </p>{" "}
              </div>
            </div>
          </div>

          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  7. Site Terms of Use Modifications
                </h2>
                <p className='leading-relaxed'>
                  Salario may revise these terms of use for its web site at any
                  time without notice. By using this web site you are agreeing
                  to be bound by the then current version of these Terms and
                  Conditions of Use.
                </p>{" "}
              </div>
            </div>
          </div>

          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  8. Salario Trademarks and Logos Policy
                </h2>
                <p className='leading-relaxed'>
                  All uses of the Salario logo, Salario badges, brand slogans,
                  iconography, and the like, may only be used with express
                  permission from Salario. Salario reserves all rights, even if
                  certain assets are included in Salario open source projects.
                  Please contact jayson.mulwa@gmail.com with any questions or to
                  request permission.
                </p>{" "}
              </div>
            </div>
          </div>

          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  9. Reserved Names
                </h2>
                <p className='leading-relaxed'>
                  Salario has the right to maintain a list of reserved names
                  which will not be made publicly available. These reserved
                  names may be set aside for purposes of proactive trademark
                  protection, avoiding user confusion, security measures, or any
                  other reason (or no reason). Additionally, Salario reserves
                  the right to change any already-claimed name at its sole
                  discretion. In such cases, Salario will make reasonable effort
                  to find a suitable alternative and assist with any
                  transition-related concerns.
                </p>{" "}
              </div>
            </div>
          </div>

          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  10. Governing Law
                </h2>
                <p className='leading-relaxed'>
                  Any claim relating to Salario's web site shall be governed by
                  the laws of the Republic of Kenya without regard to its
                  conflict of law provisions. General Terms and Conditions
                  applicable to Use of a Web Site.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterComponentLazy />
    </div>
  );
}

export default TermsComponent;
